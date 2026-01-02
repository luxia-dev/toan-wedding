import { Modal, Form, Input, Radio, Button } from "antd";
import { useState } from "react";

export default function WishForm() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Submit:", values);
    form.resetFields();
    // onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered
      width={520}
      closeIcon
      title={
        <div style={{ textAlign: "center", color: "#e11d48", fontSize: 22 }}>
          Gửi Lời Chúc Mừng
        </div>
      }
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên cho chúng mình biết nhé",
            },
          ]}
        >
          <Input placeholder="Nhập họ tên của bạn" />
        </Form.Item>

        <Form.Item
          label="Bạn là"
          name="role"
          initialValue="bride"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="bride">Bạn cô dâu</Radio>
            <Radio value="groom">Bạn chú rể</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Lời chúc"
          name="message"
          rules={[{ required: true, message: "Vui lòng nhập lời chúc" }]}
        >
          <Input.TextArea rows={4} placeholder="Viết lời chúc của bạn..." />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
          size="large"
          style={{
            background: "#f72585",
            borderColor: "#f72585",
            marginTop: 8,
          }}
        >
          Gửi Lời Chúc
        </Button>
      </Form>
    </Modal>
  );
}
