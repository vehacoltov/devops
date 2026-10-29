# שימוש ב־Node image רשמי
FROM node:20-alpine
 
# תיקיית עבודה בתוך הקונטיינר
WORKDIR /app
 
# העתקת קבצי dependencies
COPY package*.json ./
 
# התקנת תלויות
RUN npm install
 
# העתקת שאר הקוד
COPY . .

# חשיפת הפורט
EXPOSE 7001

# פקודת הרצה
CMD ["node", "server.js"]
