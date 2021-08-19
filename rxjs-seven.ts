import { of } from "rxjs";
import { filter, groupBy, map, mergeMap } from "rxjs/operators";

of(0, "A", 0, "A", 0, "A", 0, "A", 0, "A", 0, "A", 0, "A", 0, "A", 4)
.pipe(
  groupBy((x): x is number => typeof x === "number"),
  mergeMap(group$ => (group$.key === true ? group$.pipe(map(String)) : group$)),
).subscribe();
