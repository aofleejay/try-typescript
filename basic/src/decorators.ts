class User {
  @catchError
  get() {
    throw new Error('Boom!!!')
    return { name: 'John' }
  }
}

function catchError(target: User, key: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value

  descriptor.value = function() {
    try {
      method()
    } catch (error) {
      console.error('Opps, Something went wrong.')
    }
  }
}

new User().get()
