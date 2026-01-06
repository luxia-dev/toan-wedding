import { Modal, Form, Input, Radio, Button } from "antd";
import { useLanguage } from "../hooks/useLanguage";

export default function WishForm({ open, onClose }) {
  const { t } = useLanguage();
  const [form] = Form.useForm();

  console.log({ open });
  const onFinish = (values) => {
    console.log("Submit:", values);
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={() => onClose()}
      footer={null}
      centered
      width={520}
      closeIcon
      title={
        <div style={{ textAlign: "center", color: "#e11d48", fontSize: 22 }}>
          {t("send_wishes_title")}
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
          label={t("full_name")}
          name="fullName"
          rules={[
            {
              required: true,
              message: t("required_name_msg"),
            },
          ]}
        >
          <Input placeholder={t("enter_name_placeholder")} />
        </Form.Item>

        <Form.Item
          label={t("your_role")}
          name="role"
          initialValue="bride"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="bride">{t("friend_of_bride")}</Radio>
            <Radio value="groom">{t("friend_of_groom")}</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label={t("wishes_label")}
          name="message"
          rules={[{ required: true, message: t("required_wishes_msg") }]}
        >
          <Input.TextArea rows={4} placeholder={t("wishes_placeholder")} />
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
          {t("submit_wishes_btn")}
        </Button>
      </Form>
    </Modal>
  );
}
