import gulp from 'gulp'
import rename from 'gulp-rename'
import dotenv from 'dotenv'

export const setEnvVariables = async () => {
  dotenv.config()

  await Promise.resolve('process.env is ready')
}

export const env = () =>
  gulp.src('./.env.example').pipe(rename('.env')).pipe(gulp.dest('./'))
