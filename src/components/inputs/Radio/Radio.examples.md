```jsx
import { Radio } from 'koala-ui-kit';
const [value, setValue] = React.useState("email");

<>
    <Radio label="Email" value="email" checked={value === 'email'} onChange={() => setValue("email")} />
    <br/>
    <Radio label="SMS" value="sms" checked={value === 'sms'} onChange={() => setValue("sms")} />
</>
```
