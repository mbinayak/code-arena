import threading
from kafka import KafkaConsumer, TopicPartition

def consume_partition(partition_id):
    consumer = KafkaConsumer(
        bootstrap_servers="localhost:9092",
        group_id="ordered_partition_group",
        auto_offset_reset="earliest",
    )

    partitions = list(consumer.partitions_for_topic("multi_partition_ordered"))
    topic_partition = TopicPartition(
        "multi_partition_ordered", partitions[partition_id]
    )
    consumer.assign([topic_partition])

    print(f"Consuming partition {partition_id}")
    for msg in consumer:
        print(
            f"Partition: {msg.partition} - Offset: {msg.offset} - Key: {msg.key} - Value: {msg.value}"
        )

if __name__ == "__main__":
    for i in range(3):
        t = threading.Thread(
            target=consume_partition, args=(i,), name=f"consume_partition"
        )
        t.start()