import React, {
    useState
} from 'react'
import { 
    Table, 
    Input, 
    InputNumber, 
    Popconfirm, 
    Form, 
    DatePicker,
    Button,
} from 'antd';

import moment from 'moment';

//
// IMPORT ZONE
//

const originData = [{
    key: 1,
    name: `Edrward `,
    age: 1,
    address: `London Park no.`,
    estimatedTime: ''
}];



const EditableCell = ( {
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    console.log( 'inputType: ',inputType)
    console.log('restProps:', restProps)
    console.log('children:', children)
    console.log('=======================',)
    const inputNode = inputType === 'date' ? <DatePicker /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
            <Form.Item
               name={dataIndex}
               style={{ margin: 0 }}
               rules={[
                 {
                   required: true,
                   message: `Please Input ${title}!`,
                 },
               ]}
            >
                {inputNode}
            </Form.Item>):
             ( children)}
        </td>
    );
};

const Table1 = () => {
    const [ form ] = Form.useForm();
    const [ data, setData ] = useState(originData);
    const [ editingKey, setEditingKey ] = useState('');

    const isEditing = (record) => { 
       return  record.key === editingKey;
    } 

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            age: '',
            address:'',
            ...record,
        });
        setEditingKey(record.key)
    }
    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const d = row.estimatedTime
            
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1 , { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed: ', errInfo)
        }
    };

    const handleDelete = (key) => {
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);
        console.log(index)
        newData.splice(index, 1)
        const t  =  newData.map((data, index) => Object.assign({}, { ...data, age: index + 1}) )
        setData(t)
    }
    const columns = [
        { 
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        { 
            title: 'estimatedTime',
            dataIndex: 'estimatedTime',
            width: '20%',
            editable: true,
            render: (record) => 
              <> {moment(record).format('YYYY/MM/DD HH:mm:ss')} </>
            
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? ( 
                    <span>
                        <a 
                          href="javascript:;"
                          onClick={() => save(record.key)}
                        >
                            Save
                        </a>
                        <br/>
                           <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                          </Popconfirm>
                    </span>
                ) : (
                    <> 
                    <a
                      disabled={editingKey !== ''}
                      onClick={() => edit(record)}
                     >
                         Edit
                    </a>
                    <br/>
                    <Popconfirm title="Sure to cancel?" onConfirm={() => handleDelete(record.key)}>
                    <a
                     >
                         Delete
                    </a>
                    </Popconfirm>
                    </>
                )
            }
        }
    ];

    const mergedColumns = columns.map((col)=> {
        if (!col.editable){
            return col;
        }
        return { 
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === 'estimatedTime' ? 'date': 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            })
        }
    })

    const addButton = () => {
        const newData = [ ...data]
        newData.push({ 
                key: newData.length + 1,
                name: ``,
                age: newData.length + 1,
                address: ``,
                estimatedTime: ''
            }
        )
        setData(newData)
    }


    return (
        <>
        <Button onClick={() => addButton()}> Add </Button>
        <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      </>
    )
}

export default Table1
