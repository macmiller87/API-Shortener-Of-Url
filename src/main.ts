import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? process.env.SERVER_PORT);

  console.log(`Server is running at ${await app.getUrl()} 🚀`);
}

bootstrap();
