const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const propertyId = process.env.GA_PROPERTY_ID

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, '\n'),
  },
})

async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: '30daysAgo',
        endDate: 'today',
      },
    ],
    dimensions: [
      {
        name: 'year',
      },
    ],
    metrics: [
      {
        name: 'activeUsers',
      },
    ],
  })

  response.rows.forEach(
    (row: { dimensionValues: any[]; metricValues: any[] }) => {
      console.log(row.dimensionValues[0], row.metricValues[0])
    }
  )
}
