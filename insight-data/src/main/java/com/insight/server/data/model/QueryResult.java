package com.insight.server.data.model;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data
public class QueryResult {
  private String id;
  private long executionTime;
  private List<Map<String, Object>> data;
}