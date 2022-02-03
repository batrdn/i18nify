import unflatten from './unflatten';

describe('Unflatten test', () => {
  it('should unflatten an object', () => {
    const obj = {
      'a.b': 1,
      'a.c': 2,
      'a.d.e': 3,
      'a.d.f': 4,
      'a.d.g.h': 5,
      'a.d.g.i': 6,
      'a.d.g.j.k': 7,
      'a.d.g.j.l': 8,
      'a.d.g.j.m.n': 9,
      'a.d.g.j.m.o': 10,
    };
    const unflattened = unflatten(obj);
    expect(unflattened).toEqual({
      a: {
        b: 1,
        c: 2,
        d: {
          e: 3,
          f: 4,
          g: {
            h: 5,
            i: 6,
            j: {
              k: 7,
              l: 8,
              m: {
                n: 9,
                o: 10,
              },
            },
          },
        },
      },
    });
  });
});
