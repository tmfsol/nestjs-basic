class Injector {
  private readonly container: Map<string, any> = new Map();

  constructor(providers: any[] = []) {
    providers.forEach((Service) => {
      this.container.set(Service.name, new Service());
    });
  }

  get(serviceName: string): any {
    const serviceInstance = this.container.get(serviceName);

    if (!serviceInstance) {
      throw new Error('No provider not found!');
    }

    return serviceInstance;
  }
}

class User {
  sayHi() {
    console.log('Hi!');
  }
}

const injector = new Injector([User]);
const user = injector.get('User');
user.sayHi();
