declare namespace NodeJS {
  export type ProcesEnv = {
    PORT: number
    DATABASE_URL: string
    BCRYPT_SALT_ROUND: number
  }
}
