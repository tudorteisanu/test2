const ListController = require('../../controllers/list')

module.exports = (app) => {
  /**
   * RETERTRETRETERTERTRETRETERTRET
   * @route GET /cron
   * @group get - что то про этот роут
   * @returns {object} 200 - Массив с какой то хуетой
   * @returns {Error}  default - Unexpected error
   */
  app.get('/cron', [
    ListController.getAll
  ])

  /**
   * This function comment is parsed by doctrine
   * @route GET /cron/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.get('/cron/:id', [
    ListController.get
  ])

  /**
   * @typedef Produs
   * @property {string} denumire.required
   * @property {integer} pret.required
   */

  /**
   * This function comment is parsed by doctrine
   * @route POST /cron
   * @group get - что то про этот роут
   * @param {Produs.model} body.body.required - the new produs
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.post('/cron', [
    ListController.post
  ])

  /**
   * This function comment is parsed by doctrine
   * @route PUT /cron/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @param {Produs.model} body.body.required - the new produs
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.put('/cron/:id', [
    ListController.put
  ])

  /**
   * This function comment is parsed by doctrine
   * @route PATCH /cron/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @param {Produs.model} body.body.required - the new produs
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.patch('/cron/:id', [
    ListController.patch
  ])

  /**
   * This function comment is parsed by doctrine
   * @route DELETE /cron/{id}
   * @group get - что то про этот роут
   * @param {string} id.path.required - idska
   * @returns {object} 200 - Данные об одном пользователе
   * @returns {Error}  default - Unexpected error
   */
  app.delete('/cron/:id', [
    ListController.delete
  ])
}
