import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Polish from 'App/Models/Polish'

export default class NailpolishesController {
  public async index({ view }: HttpContextContract) {
    return view.render('polish/index')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('polish/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const { name, brand, type, expiration, color } = request.all()

    try {
      const polish = await Polish.create({ name, brand, type, expiration, color })
      console.log(polish)
    } catch (error) {
      console.error(error)
      return response.redirect().back()
    }
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
