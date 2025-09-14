# Hands-on Kafka system practice

## Setup

### 1. Start the Kafka & Zookeper Containers

```bash
docker compose up -d
```

### 2. Create the topics

```bash
docker exec -it 673eb899ee1c /opt/bitnami/kafka/bin/kafka-topics.sh --create --topic multi_partition_ordered --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1
```
