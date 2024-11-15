import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    borderBottom: '1px solid #ddd',
    paddingBottom: 4,
  },
  item: {
    marginBottom: 5,
  },
  comments: {
    fontSize: 10,
    color: 'gray',
  },
});

const ServiceInvoicePDF = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Service Checklist</Text>
      {Object.keys(formData).map((item) => (
        <View key={item} style={styles.section}>
          <Text style={styles.item}>
            {item}:{' '}
            {formData[item].okay
              ? 'Inspected Okay'
              : formData[item].notOkay
              ? 'Inspected Not Okay'
              : formData[item].adjusted
              ? 'Repaired & Adjusted'
              : formData[item].notChecked
              ? 'Not Checked'
              : 'No Status'}
          </Text>
          {formData[item].comments && (
            <Text style={styles.comments}>Comments: {formData[item].comments}</Text>
          )}
        </View>
      ))}
    </Page>
  </Document>
);

export default ServiceInvoicePDF;
