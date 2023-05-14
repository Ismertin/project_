import colors from 'colors'
import dotenv from 'dotenv'
import express from 'express'
import jsonWebToken from 'jsonwebtoken'
import morgan from 'morgan'

import authRoutes from './app/auth/auth.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import userRoutes from './app/user/user.routes.js'

const app = express()

const PORT = 5000

async function main() {
	if (process.env.NODE_ENV !== 'development') app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRoutes)
	app.use('/api/users', userRoutes)

	app.use(notFound), app.use(errorHandler)

	app.listen(process.env.PORT || 5000, () => {
		console.log(
			`Server running on port ${process.env.NODE_ENV} mode on port ${PORT}`
				.black.bold
		)
	})
}

main()
