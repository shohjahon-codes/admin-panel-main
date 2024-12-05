import { Button, Image, message, Table } from "antd"
import { useGetCatalogs } from "./servise/query/useGetCategory";
import { Link } from "react-router-dom";
import { ColumnsType } from "antd/es/table";
import { useDeleteItems } from "./servise/mutation/useDeleteItems";

export const CategoryList = () => {
  const { data } = useGetCatalogs()
  const { mutate } = useDeleteItems()
  
  console.log(data);

  const deleteUser = (id: number) => {
    mutate(id, {
      onSuccess: () => {
        message.success("Successfully deleted!");
      }
    })
  }
  

  const dataSource = data?.results?.map((item)=>{
    
    return {
      key: item.id,
      id: item.id,
      img: item.image,
      title: item.title,
    }
  })

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'IMG',
      dataIndex: 'img',
      key: 'img',
      render: (image) =>
          <Image src={image} alt="category" width={80} height={70}/>
    },
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Change',
      dataIndex: 'change',
      key: 'change',
      render: (_,record) => 
        <div>
          <Button onClick={() => deleteUser(record.id)} htmlType="submit" type="primary">Delete</Button>
          <Link to={`/app/edit/${record.id}`} >
            <Button  htmlType="submit" type="primary">Edit</Button>
          </Link>
        </div>
    }
  ];

  return (
    <div className="table-wrapper">
      <Link to={'/app/create'}>
        <Button type="primary" variant="dashed">Create</Button>
      </Link>
      <div style={{ marginTop: '20px' }}>
        <Table style={{scrollbarWidth: 'auto'}} columns={columns}  dataSource={dataSource} />
      </div>
    </div>
  )
}
