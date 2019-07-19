package com.insight.server.data.model;

import lombok.Data;

@Data
public class DatasetAttribute {
  private String name;
  private String type;
  private boolean nullable;
}