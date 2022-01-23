const isDublicateService = async (newService, Service) => {
  return await Service.findOne(newService)
}

module.exports = isDublicateService
