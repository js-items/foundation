import Facade from '../Facade';
import Item from './Item';

export default interface Options<I extends Item> {
  readonly facade: Facade<I>;
};