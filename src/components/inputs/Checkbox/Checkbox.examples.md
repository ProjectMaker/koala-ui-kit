
```js
const [isCheck, setIsCheck] = React.useState(false)
import { Checkbox } from 'koala-ui-kit';

<Checkbox label="Newsletter" onChange={() => setIsCheck(!isCheck)} checked={isCheck}/>
```
