import axios from "axios";

const api = axios.create({
    baseURL: 'https://gkmpdxpjngmaljxohhqp.supabase.co/rest/v1', // Definir a URL padrão
    headers: {
      'Content-Type': 'application/json', // Definir os cabeçalhos padrão
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbXBkeHBqbmdtYWxqeG9oaHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NTQxMjgsImV4cCI6MjAwMTAzMDEyOH0.bsYyVmGYJHBT18w81oG9VHsAZI5BAwQhI51FIPe5mCI',
      'apiKey': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbXBkeHBqbmdtYWxqeG9oaHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NTQxMjgsImV4cCI6MjAwMTAzMDEyOH0.bsYyVmGYJHBT18w81oG9VHsAZI5BAwQhI51FIPe5mCI",
      'prefer': 'return=minimal'
    },
  });

export default api;