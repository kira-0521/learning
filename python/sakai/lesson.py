class Car(object):
  def __init__(self, model: str = 'default') -> None:
    self.model = model
  def run(self):
    print('run')

class ToyotaCar(Car):
  pass

class TeslaCar(Car):
  def __init__(self, model: str = 'default', enable_auto_run: bool = True, password: str = '') -> None:
    super().__init__(model)
    self._enable_auto_run = enable_auto_run
    self.password = password

  @property
  def enable_auto_run(self):
    return self._enable_auto_run

  @enable_auto_run.setter
  def enable_auto_run(self, is_enable):
    if self.password == '123':
      self._enable_auto_run = is_enable
    else:
      raise ValueError

car = Car()
car.run()
toyota = ToyotaCar('Toyota')
print(toyota.model)

tesla = TeslaCar(model='model', password='123')

tesla.enable_auto_run = True
print(tesla.enable_auto_run)
