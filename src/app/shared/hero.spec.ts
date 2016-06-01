import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Hero} from './hero';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero()).toBeTruthy();
  });
});
