import React, { type FC } from 'react';

import './index.less';

const Foo: FC<{ title: string }> = (props) => (
  <div className="title">{props.title}</div>
);

export default Foo;
