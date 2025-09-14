from kafka import KafkaProducer
import time

producer = KafkaProducer(bootstrap_servers="localhost:9092")

def infinite_number_generator():
    num = 0
    while True:
        yield num
        num += 1

for number in infinite_number_generator():
    key = f"key-{number % 3}"  # This will ensure we have 3 keys for 3 partitions
    value = str(number)
    producer.send(
        "multi_partition_ordered", key=key.encode("utf-8"), value=value.encode("utf-8")
    )
    time.sleep(1)