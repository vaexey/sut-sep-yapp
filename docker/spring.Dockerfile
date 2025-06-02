FROM maven:3.9.9-eclipse-temurin-21-alpine AS build

WORKDIR /app
COPY back/pom.xml .
COPY back/src ./src
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-alpine
WORKDIR /app
COPY --from=build /app/target/backend.jar .
CMD ["java", "-jar", "backend.jar"]
