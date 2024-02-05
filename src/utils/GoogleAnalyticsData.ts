import { BetaAnalyticsDataClient } from '@google-analytics/data'
const propertyId = process.env.GA_PROPERTY_ID

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, '\n'),
  },
})

export async function runReport() {
  try {
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

    return response
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
