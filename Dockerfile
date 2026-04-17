FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Dependencias necesarias para módulos nativos
RUN apk add --no-cache python3 make g++

# Copiar package.json
COPY package*.json ./

# Instalar dependencias (solo producción)
RUN npm install --omit=dev

# Copiar el resto del proyecto
COPY . .

# Build del admin de Strapi
RUN npm run build

# Entorno producción
ENV NODE_ENV=production

# 🔥 ESTO FALTABA
EXPOSE 1337

# Ejecutar Strapi
CMD ["npm", "run", "start"]