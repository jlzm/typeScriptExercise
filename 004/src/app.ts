"use strict";
/**
 * typescript
 */

 let lastNight: string = 'jlzm';
 lastNight = 'asam';

 let isDone: boolean = true;

 let age: number = 23;

 let fruits: string[] = ['jlzm', 'asam'];

 let ghost: any = 1;


 const greet = (user: string): boolean =>{
     if(!user) {
         return false;
     }
     return true
 }

 console.log('greet', greet('jlzm'));