class Car(object):
  def __init__(self, model: str = 'default') -> None:
    self.model = model
  def run(self):
    print('run')

class ToyotaCar(Car):
  pass

car = Car()
car.run()
toyota = ToyotaCar('Toyota')
print(toyota.model)

