const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const analyticsDataClient = new BetaAnalyticsDataClient()

const propertyId = process.env.GA_PROPERTY_ID

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

  console.log('Report result:')
  response.rows.forEach(
    (row: { dimensionValues: any[]; metricValues: any[] }) => {
      console.log(row.dimensionValues[0], row.metricValues[0])
    }
  )
}

runReport()
