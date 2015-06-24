import { tagged as tag } from 'daggy';

var Lense = tag('from');

/* Lense.compose(...lenses) */
Lense.compose = function (...lenses) {

  return lenses.reduce((aggLense, lense) => {

    return Lense((target) => {

      var a = aggLense.from(target),
          b = lense.from(a.get());

      return {
        get() { return b.get(); },
        set (v) { return a.set(b.set(v)); }
      };
    });
  });
};

/* Lense.of('propName') */
Lense.of = function (prop) {

   return Lense((obj) => {

     return {
       get() { return obj[prop]; },
       set (v) { return { ...obj, [prop]: v }; }
     }
   });
};

/* Lense.ofPath(...[propNames]) */
Lense.ofPath = function (path) {

  return Lense.compose.apply(null, path.map((p) => Lense.of(p)));
};

export default Lense;
