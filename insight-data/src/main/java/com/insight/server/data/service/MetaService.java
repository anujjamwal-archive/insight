package com.insight.server.data.service;

import java.util.List;

import com.insight.server.data.model.DatasetAttribute;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class MetaService {

  @RequestMapping(value = "/datasets/{id}/definition", method = RequestMethod.GET)
  public List<DatasetAttribute> query() {
    return null;
  }
}
