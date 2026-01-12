import { Modal, List, Skeleton, Tag, Empty } from "antd";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useLanguage } from "../hooks/useLanguage";
import { User, Heart } from "lucide-react";

export default function WishList({ open, onClose }) {
  const { t } = useLanguage();
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      fetchWishes();
    }
  }, [open]);

  const fetchWishes = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("toan-wedding")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setWishes(data || []);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={700}
      title={
        <div className="text-center text-rose-600 text-2xl font-bold mb-6 flex items-center justify-center gap-2">
          <Heart className="w-6 h-6 fill-rose-600" />
          {t("wish_list_title")}
          <Heart className="w-6 h-6 fill-rose-600" />
        </div>
      }
      className="wish-list-modal"
    >
      <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
        {loading ? (
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : wishes.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={wishes}
            renderItem={(item) => (
              <List.Item className="bg-rose-50/50 mb-3 rounded-xl p-4 border border-rose-100/50 hover:bg-rose-50 transition-colors">
                <List.Item.Meta
                  className="px-4"
                  //   avatar={
                  //     <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                  //       <User className="w-6 h-6 text-rose-500" />
                  //     </div>
                  //   }
                  title={
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-lg text-gray-800">
                        {item.name}
                      </span>
                      <Tag
                        color={item.friend_of === "bride" ? "magenta" : "blue"}
                        className="rounded-full px-2 py-0 text-xs"
                      >
                        {item.friend_of === "bride"
                          ? t("friend_of_bride")
                          : t("friend_of_groom")}
                      </Tag>
                      <span className="text-xs text-gray-400 ml-auto">
                        {new Date(item.created_at).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                  }
                  description={
                    <p className="text-gray-600 mt-2 text-base italic leading-relaxed whitespace-pre-wrap">
                      "{item.wish}"
                    </p>
                  }
                />
              </List.Item>
            )}
          />
        ) : (
          <Empty description={t("no_wishes_yet")} />
        )}
      </div>
    </Modal>
  );
}
