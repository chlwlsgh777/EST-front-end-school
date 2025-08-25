function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

interface DataStorage<K, V> {
  getItem(key: K): V | undefined;
  setItem(key: K, value: V): void;
}

class InMemoryStorage<K, V> implements DataStorage<K, V> {
  private storage: Map<K, V> = new Map();

  getItem(key: K): V | undefined {
    return this.storage.get(key);
  }

  setItem(key: K, value: V): void {
    this.storage.set(key, value);
  }
}
