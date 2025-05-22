import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");
  await app.listen(process.env.PORT || 4000);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      enableDebugMessages: true,
    })
  );
  console.log("Starting on port", process.env.PORT);
}
bootstrap();
