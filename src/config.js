const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-quantisimo212",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wokd104t5m.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_nPoc0x4Ak",
    APP_CLIENT_ID: "7j5jmrlfhk4r8t6vb2r0rkf0uq",
    IDENTITY_POOL_ID: "us-east-1:3cfc2b9a-bf8f-43aa-bba6-b2ee168a82dd",
  },
};

export default config;
