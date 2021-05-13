import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Books from '@/store/books'

let books: Books

const initializeStores = (store: Store<any>): void => {
  books = getModule(Books, store)
}

export { initializeStores, books }