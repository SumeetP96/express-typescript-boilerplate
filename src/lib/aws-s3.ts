import {
    DeleteObjectCommand,
    DeleteObjectsCommand,
    GetObjectCommand,
    PutObjectCommand,
    S3Client,
    S3ClientConfig,
} from '@aws-sdk/client-s3';
import { envConfig } from '@config/env';

/**
 * Default AWS S3 bucket name
 */
const s3Bucket = envConfig.AWS_S3_BUCKET_NAME;

/**
 * AWS S3 client configuration
 */
const s3Config: S3ClientConfig = {
    region: envConfig.AWS_S3_BUCKET_REGION,

    credentials: {
        accessKeyId: envConfig.AWS_S3_BUCKET_ACCESS_KEY_ID,

        secretAccessKey: envConfig.AWS_S3_BUCKET_SECRET_ACCESS_KEY,
    },
};

/**
 * Get file from AWS S3 bucket
 */
const getObject = async (path: string, bucket: string = s3Bucket) => {
    const s3Client = new S3Client(s3Config);

    const command = new GetObjectCommand({
        Bucket: bucket,
        Key: path,
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Put file to AWS S3 bucket
 */
const putObject = async (buffer: Buffer, path: string, bucket?: string) => {
    const s3Client = new S3Client(s3Config);

    const command = new PutObjectCommand({
        Bucket: bucket,
        Key: path,
        Body: buffer,
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Delete file from AWS S3 bucket
 */
const deleteObject = async (path: string, bucket?: string) => {
    const s3Client = new S3Client(s3Config);

    const command = new DeleteObjectCommand({
        Bucket: bucket,
        Key: path,
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

/**
 * Delete multiple files from AWS S3 bucket
 */
const deleteMultipleObjects = async (paths: string[], bucket?: string) => {
    const s3Client = new S3Client(s3Config);

    const command = new DeleteObjectsCommand({
        Bucket: bucket,
        Delete: {
            Objects: paths.map((path) => ({ Key: path })),
        },
    });

    try {
        return await s3Client.send(command);
    } catch (error) {
        console.error(error);
    }
};

export const awsS3 = {
    putObject,
    getObject,
    deleteObject,
    deleteMultipleObjects,
};
