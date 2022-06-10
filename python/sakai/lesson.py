class Car(object):
  def __init__(self, model: str = 'default') -> None:
    self.model = model
  def run(self):
    print('run')

class ToyotaCar(Car):
  pass

class TeslaCar(Car):
  def __init__(self, model: str = 'default', enable_auto_run: bool = True) -> None:
    super().__init__(model)
    self._enable_auto_run = enable_auto_run

  @property
  def enable_auto_run(self):
    return self._enable_auto_run


car = Car()
car.run()
toyota = ToyotaCar('Toyota')
print(toyota.model)

tesla = TeslaCar(model='model', enable_auto_run=False)
print(tesla.enable_auto_run)
