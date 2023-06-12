Debouncing:

typing slow = 200ms
typing fast = 30ms

performace:
iphone pro max = 14 letter * 1000 = 14000
with debouncing = 3 API calls * 1000 = 3000

Debouncing with 200ms
- if different between 2 key strokes is <200ms - Decline API call
>200ms make an API call
/**
 * key - i
 * - render the component
 * - useEffect();
 * - start timer => make api call after 200 ms
 * 
 * key - ip
 * - destroy the component(useEffect return method)
 * - render the component
 * - useEffect()
 * - start timer => make api call after 200 ms
 *  setTimeout(200) - make an api call after 200 ms
 */


 cache: []
 time complexity to search in array = o(n)
 [i, ip, iph, iphone]
 {
    i:
    ip:
    iph:
    iphone:
 }

 new Map();