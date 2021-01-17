import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';
import compression from 'fastify-compress';


async function bootstrap(): Promise<void> {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({
            logger: false, // Set to true to activate the built in logger
            ignoreTrailingSlash: true,
            maxParamLength: 300,
        }),
    );

    app.register(compression);

    await app.listen(8080, '0.0.0.0');
}
bootstrap();