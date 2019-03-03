import Facade from '../facade';
import Item from './item';

export default interface Options<I extends Item> {
  readonly facade: Facade<I>;
};