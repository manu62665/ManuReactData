import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
    // "Content-type": "application/x-www-form-urlencoded",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYyNDY0MjU3MiwiZXhwIjoxNjI0NjQ2MTcyLCJuYmYiOjE2MjQ2NDI1NzIsImp0aSI6IjdmUTBhVTNCWlMwbUJzMGciLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.334xH1sxJnN2Q-93uZzv8DAy2LSXg2CQpEyFbi7J2_M",
  }
});