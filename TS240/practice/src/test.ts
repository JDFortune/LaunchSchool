interface Animal {
  name: string;
  makeNoise: () => void;
}

interface DogType extends Animal {
  tail: boolean;
  makeNoise: (str?: string) => string;
}

class Dog implements DogType {
  constructor(public name: string, public tail: boolean ) {}

  makeNoise(str?: string): string {
    return 'hello';
  }
}
