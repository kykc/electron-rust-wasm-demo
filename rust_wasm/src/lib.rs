extern crate js_sys;
extern crate wasm_bindgen;
extern crate web_sys;
use wasm_bindgen::prelude::*;
use js_sys::{Uint8Array, Array};
use std::io::Read;

fn to_db(s: f64) -> f64 {
    20f64 * f64::abs(s).log10()
}

fn do_the_read<R: Read>(r: &mut R) -> f64 {
    let result = claxon::FlacReader::new(r).map(|mut reader| {
        let mut sqr_sum = 0.0;
        let mut count = 0;
        for sample in reader.samples() {
            let s = (sample.unwrap() as f64) / 32768.0f64;
            sqr_sum += s * s;
            count += 1;
        }

        (sqr_sum / count as f64).sqrt()
    });

    to_db(result.unwrap_or(0f64))
}

#[wasm_bindgen]
pub fn main(file_reader: web_sys::FileReader) -> f64 {
    match file_reader.result() {
        Ok(value) => {
            let typed_buf = Uint8Array::new(&value);
            let mut vec = Vec::new();
            typed_buf.for_each(&mut |x,_,_| {
                vec.push(x);
            });

            do_the_read(&mut vec.as_slice())
        }
        Err(_) => -2f64
    }
}

#[wasm_bindgen]
pub fn sqrt_roots_js(a: f64, b: f64, c: f64) -> Array {
    let roots = sqrt_roots(a, b, c);
    let result = Array::new();

    result.push(&JsValue::from((roots.0).0));
    result.push(&JsValue::from((roots.0).1));
    result.push(&JsValue::from((roots.1).0));
    result.push(&JsValue::from((roots.1).1));

    result
}

fn sqrt_roots(a: f64, b: f64, c: f64) -> ((f64, f64), (f64, f64)) {
    let d = b * b - 4f64 * a * c;

    if d > 0f64 {
        let x1 = (-b + d.sqrt()) / (2f64 * a);
        let x2 = (-b - d.sqrt()) / (2f64 * a);

        ((x1, 0f64), (x2, 0f64))
    } else if d < 0f64 {
        let re = -b / (2f64 * a);
        let im = (-d).sqrt() / (2f64 * a);

        ((re, im), (re, -im))
    } else {
        let x = -b / (2f64 * a);

        ((x, 0f64), (x, 0f64))
    }
}