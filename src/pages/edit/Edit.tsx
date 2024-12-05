import { useNavigate, useParams } from "react-router-dom";
import { useGetEditCategory } from "./servise/query/useGetEditCategory";
import { Form, message, Tabs } from "antd";
import { FormCategory } from "../../components/form";
import { useState } from "react";
import { RcFile } from "antd/es/upload";
import { useEditCategory } from "./servise/mutation/useEditCategory";

export interface initialValuesType {
  title: string;
  image: { file: File };
}

export const EditCategory = () => {
  const { id } = useParams();
  const [tabs, setTabs] = useState<string>('1')
  const [form] = Form.useForm();
  const { data, isLoading} = useGetEditCategory(Number(id));
  const { mutate } = useEditCategory(Number(id));
  const navigate = useNavigate()
  console.log(data, 'edittgt');
  
  console.log(data);

  const initialValues: initialValuesType = {
    title: data?.title,
    image: data?.image,
  }

  const submit = (values: { title: string; image: { file: RcFile } }) => {
    const formData = new FormData();

    formData.append("title", values.title);

    if (values.image) {
      formData.append("image", values.image.file);
    }

    mutate(formData, {
      onSuccess: () => {
        message.success("Category added successfully!");
        form.resetFields();
        setTabs('1')      
        navigate('/app')

      },
      onError: (error) => {
        message.error(`Failed to add category: ${error.message}`);
      },
    });
  };

  console.log(isLoading);

  return (
    <div>
      <Tabs defaultActiveKey="1" activeKey={tabs} items={[
        {
          key: '1',
          label: 'Add Category',
          children: isLoading ? <div>Loading...</div> : <FormCategory  isEdit={true} onFinish={submit} form={form} isLoding={isLoading} initialValues={initialValues} />
        }
      ]}>
      </Tabs>
    </div>
  )
}
