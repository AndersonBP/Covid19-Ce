#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["src/COVID.Service.Api/COVID.Service.Api.csproj", "src/COVID.Service.Api/"]
RUN dotnet restore "src/COVID.Service.Api/COVID.Service.Api.csproj"
COPY . .
WORKDIR "/src/src/COVID.Service.Api"
RUN dotnet build "COVID.Service.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "COVID.Service.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "COVID.Service.Api.dll"]