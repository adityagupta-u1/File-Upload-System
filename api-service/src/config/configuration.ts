export default () => ({
  //   app: {
  //     name: process.env.APP_NAME ?? 'file-upload-service',
  //     env: process.env.NODE_ENV ?? 'development',
  //     port: parseInt(process.env.PORT ?? '3000', 10),
  //     baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
  //   },

  database: {
    url: process.env.DATABASE_URL,
    // maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS ?? '10', 10),
    // ssl: process.env.DB_SSL === 'true',
  },

  //   redis: {
  //     host: process.env.REDIS_HOST,
  //     port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
  //     password: process.env.REDIS_PASSWORD || undefined,
  //     ttl: parseInt(process.env.REDIS_TTL ?? '3600', 10), // default 1 hr
  //   },

  //   aws: {
  //     region: process.env.AWS_REGION,
  //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,

  //     s3: {
  //       bucket: process.env.AWS_S3_BUCKET,
  //       presignedUrlExpiresIn: parseInt(
  //         process.env.S3_PRESIGNED_URL_EXPIRES ?? '300', // 5 min
  //         10,
  //       ),
  //     },

  //     sqs: {
  //       queueUrl: process.env.SQS_QUEUE_URL,
  //       dlqUrl: process.env.SQS_DLQ_URL,
  //     },
  //   },

  //   auth: {
  //     jwtSecret: process.env.JWT_SECRET,
  //     jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '1d',
  //   },

  //   rateLimit: {
  //     ttl: parseInt(process.env.RATE_LIMIT_TTL ?? '60', 10), // seconds
  //     limit: parseInt(process.env.RATE_LIMIT_LIMIT ?? '100', 10),
  //   },

  //   logging: {
  //     level: process.env.LOG_LEVEL ?? 'info',
  //   },
});
