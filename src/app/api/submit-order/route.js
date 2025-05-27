import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req) {
  try {
    const {
      firstName,
      lastName,
      phone,
      
      wilaya,
      deliveryType,
      deliveryPrice,
      orderPrice,
      total,
      status,
      orderDate,
    } = await req.json(); // Capture form data

    // Configure Google Auth with the service account credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: 'service_account',
        project_id: 'velvety-striker-348813',
        private_key_id: '43c8dc8df42b8a0fd21a6c152c1b9b174a536299',
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: '105451407176536861258',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
          'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'], // or any other required scopes
    });

    // Instantiate Sheets API
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // Get your Google Sheet ID from environment variable

    // Append the data to the Google Sheet (Columns A to L)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet2!A:L', // Columns A to L
      valueInputOption: 'RAW',
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            phone,
            wilaya,
            deliveryType,
            deliveryPrice,
            orderPrice,
            total,
            status,
            orderDate,
          ], // Data from the form
        ],
      },
    });

    return NextResponse.json({ message: 'Order submitted successfully!' });
  } catch (error) {
    console.error('Failed to submit order:', error);
    console.log(error);
    return NextResponse.json(
      { message: 'Failed to submit order' },
      { status: 500 }
    );
  }
}
